const entityService = require('./app-service.js');
const logger = require('../../services/logger-service');

// GET LIST
async function getEntitys(req, res) {
  try {
    logger.debug('Getting Entitys');
    const queryParams = req.query;
    const entitys = await entityService.query(queryParams);
    res.json(entitys);
  } catch (err) {
    logger.error('Failed to get entitys', err);
    res.status(500).send({ err: 'Failed to get entitys' });
  }
}

// GET BY ID
async function getEntityById(req, res) {
  try {
    const entityId = req.params.id;
    const entity = await entityService.getById(entityId);
    res.json(entity);
  } catch (err) {
    logger.error('Failed to get entity', err);
    res.status(500).send({ err: 'Failed to get entity' });
  }
}

// POST (add entity)
async function addEntity(req, res) {
  try {
    const entity = req.body;
    const addedEntity = await entityService.add(entity);
    res.json(addedEntity);
  } catch (err) {
    logger.error('Failed to add entity', err);
    res.status(500).send({ err: 'Failed to add entity' });
  }
}

// PUT (Update entity)
async function updateEntity(req, res) {
  try {
    const entity = req.body;
    const updatedEntity = await entityService.update(entity);
    res.json(updatedEntity);
  } catch (err) {
    logger.error('Failed to update entity', err);
    res.status(500).send({ err: 'Failed to update entity' });
  }
}

// DELETE (Remove entity)
async function removeEntity(req, res) {
  try {
    const entityId = req.params.id;
    await entityService.remove(entityId);
    res.send('Removed');
  } catch (err) {
    logger.error('Failed to remove entity', err);
    res.status(500).send({ err: 'Failed to remove entity' });
  }
}

module.exports = {
  getEntitys,
  getEntityById,
  addEntity,
  updateEntity,
  removeEntity,
};
