import * as tuitsDao from '../tuits/tuits-dao.js';
// let tuits = posts;

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = new Date().getTime() + '';
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.username = 'Sristika';
  newTuit.dislikes = 0;
  newTuit.title = 'dummy title';
  newTuit.time = '1s';
  newTuit.image =
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg&_gl=1*1cl81rv*_ga*MTk5ODg1MzE1OC4xNjY0NjYxMjcz*_ga_8JE65Q40S6*MTY2Nzc3MTc2MC41LjEuMTY2Nzc3MTc2Mi4wLjAuMA..';
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  // tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};
