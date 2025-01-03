import fs from 'fs';
import csv from 'csv-parser';
import { resolve } from 'path';
import { ICsvBook } from './types';

const jsonFilePath = './src/data/books.json';
const csvFilePath = './src/data/books.csv';

export const loadAndMergeBooks = async (): Promise<any[]> => {

const jsonBooks = JSON.parse(fs.readFileSync(jsonFilePath,  'utf-8')).map((book: any) => ({
  ...book,
  id: String(book.id)
}))

const csvBooks = await new Promise<any[]>((resolve, reject) => {
  const books: ICsvBook[] = [];
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => {
      books.push({
        ...data,
        id: String(data.id),
      });
    })
    .on('end', () => resolve(books))
    .on('error', (err) => reject(err));
});

const mergedBooks = [...jsonBooks];

csvBooks.forEach((csvBook) => {
 const existingIndex = mergedBooks.findIndex((jsonBook) => jsonBook.id === csvBook.id );

 if(existingIndex !== -1) {
  mergedBooks[existingIndex] = {
    ...mergedBooks[existingIndex],
    ...csvBook
  }
 } else {
  mergedBooks.push(csvBook)
 }

})

return mergedBooks;

}
