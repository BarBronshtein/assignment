import { httpService } from './http.service';

export const entityService = {
	query,
	getById,
	remove,
	save,
	getEmptyEntity,
};

async function query(filterBy = {}) {
	try {
		return await httpService.get('entity', { params: filterBy });
	} catch (err) {
		console.log('Cannot get entitys', err);
	}
}

async function getById(entityId) {
	try {
		return await httpService.get(`entity/${entityId}`);
	} catch (err) {
		console.log('Cannot get the entity', err);
	}
}
async function remove(entityId) {
	await httpService.delete(`entity/${entityId}`);
}

async function save(entity, activity = null) {
	try {
		if (entity._id) {
			activity && entity.activities.unshift(activity);
			return await httpService.put(`entity/${entity._id}`, entity);
		} else return await httpService.post('entity', entity);
	} catch {
		console.log('cannot save entity');
	}
}

function getEmptyEntity(title) {
	return {};
}
