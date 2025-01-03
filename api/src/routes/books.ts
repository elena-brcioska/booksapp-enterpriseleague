import { Router } from 'express';
import { loadAndMergeBooks } from '../util/mergeData';

const router = Router();

router.get('/books', async (req, res) => {
  try {

    const books = await loadAndMergeBooks();


    const _page = parseInt(req.query._page as string) || 1;
    const _limit = parseInt(req.query._limit as string) || 10;

    const totalCount = books.length;
    const startIndex = (_page - 1) * _limit;
    const paginatedBooks = books.slice(startIndex, startIndex + _limit);

    res.setHeader('x-total-count', totalCount);

    res.status(200).json(paginatedBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load books' });
  }
});

export default router;
