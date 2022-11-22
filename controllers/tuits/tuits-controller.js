import posts from './tuits.js';
let tuits = posts;

const findTuits = (req, res) => res.json(tuits);

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = new Date().getTime() + '';
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.username = 'Sristika';
  newTuit.dislikes = 0;
  newTuit.title = 'dummy title';
  newTuit.time = '1s';
  newTuit.image =
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg&_gl=1*1cl81rv*_ga*MTk5ODg1MzE1OC4xNjY0NjYxMjcz*_ga_8JE65Q40S6*MTY2Nzc3MTc2MC41LjEuMTY2Nzc3MTc2Mi4wLjAuMA..';
  tuits.push(newTuit);
  res.json(newTuit);
};

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};
