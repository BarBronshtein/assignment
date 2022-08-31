const dbService = require('../../services/db-service');
const logger = require('../../services/logger-service');
const ObjectId = require('mongodb').ObjectId;
async function query(filterBy) {
  try {
    let entitys;
    const sortBy = JSON.parse(filterBy.sortBy);
    const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection('entity');
    if (sortBy.status) {
      entitys = await collection
        .find(criteria)
        .sort({ [sortBy.status]: sortBy.state })
        .toArray();
    } else {
      entitys = await collection.find(criteria).toArray();
    }
    return entitys;
  } catch (err) {
    logger.error('cannot find entitys', err);
    throw err;
  }
}

async function getById(entityId) {
  try {
    const collection = await dbService.getCollection('entity');
    const entity = collection.findOne({ _id: ObjectId(entityId) });
    return entity;
  } catch (err) {
    logger.error(`while finding entity ${entityId}`, err);
    throw err;
  }
}

async function remove(entityId) {
  try {
    const collection = await dbService.getCollection('entity');
    await collection.deleteOne({ _id: ObjectId(entityId) });
    return entityId;
  } catch (err) {
    logger.error(`cannot remove entity ${entityId}`, err);
    throw err;
  }
}

async function add(entity) {
  try {
    // Todo remove _id in the front
    delete entity._id;
    const collection = await dbService.getCollection('entity');
    await collection.insertOne(entity);
    return entity;
  } catch (err) {
    logger.error('cannot insert entity', err);
    throw err;
  }
}
async function update(entity) {
  try {
    const id = ObjectId(entity._id);
    delete entity._id;
    const collection = await dbService.getCollection('entity');
    await collection.updateOne({ _id: id }, { $set: { ...entity } });
    entity._id = id;
    return entity;
  } catch (err) {
    logger.error(`cannot update entity ${entityId}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.txt) {
    criteria.name = { $regex: filterBy.txt, $options: 'i' };
  }
  // if (filterBy.inStock) {
  //   criteria.inStock = { $eq: true };
  // }
  // if (filterBy.labels?.length > 0) {
  //   criteria.labels = { $all: filterBy.labels };
  // }

  return criteria;
}
