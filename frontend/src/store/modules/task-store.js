import { entityService } from '../../services/entity.service.js';

export default {
	state: {
		entitys: null,
		filterBy: null,
		isLoading: false,
		entityWorker: false,
	},
	getters: {
		entitys(state) {
			return state.entitys;
		},
		isLoading(state) {
			return state.isLoading;
		},
		filterBy(state) {
			return state.filterBy;
		},
		entityWorker(state) {
			return state.entityWorker;
		},
	},
	mutations: {
		setEntitys(state, { entitys }) {
			state.entitys = entitys;
		},
		setIsLoading(state, { isLoading }) {
			state.isLoading = isLoading;
		},
		removeEntity(state, { id }) {
			const idx = state.entitys.findIndex(entity => entity._id === id);
			state.entitys.splice(idx, 1);
		},
		saveEntity(state, { entity }) {
			const idx = state.entitys.findIndex(
				currEntity => currEntity._id === entity._id
			);
			if (idx !== -1) state.entitys.splice(idx, 1, entity);
			else state.entitys.unshift(entity);
		},
		setFilter(state, { filterBy }) {
			state.filterBy = filterBy;
		},
		updateEntityStatus(state, { entity }) {
			const curEntity = state.entitys.find(
				curEntity => entity._id === curEntity._id
			);
			curEntity.status = entity.status;
		},
		updateEntityTriesCount(state, { entity }) {
			const curEntity = state.entitys.find(
				curEntity => entity._id === curEntity._id
			);
			console.log(entity, curEntity);
			curEntity.triesCount = entity.triesCount;
		},
		toggleEntityWorker(state) {
			state.entityWorker = !state.entityWorker;
			entityService.toggleEntityWorker();
		},
	},
	actions: {
		async loadEntitys({ commit, state }) {
			commit({ type: 'setIsLoading', isLoading: true });
			try {
				var entitys = await entityService.query(state.filterBy);
				commit({ type: 'setEntitys', entitys });
			} catch (err) {
				console.error('Cannot Load entitys', err);
				throw err;
			} finally {
				commit({ type: 'setIsLoading', isLoading: false });
			}
		},
		async saveEntity({ commit }, { entity }) {
			try {
				const savedEntity = await entityService.save(entity);
				commit({ type: 'saveEntity', entity: savedEntity });
			} catch (err) {
				console.error('Cannot save entity', err);
				throw err;
			}
		},
		async removeEntity({ commit }, { id }) {
			try {
				await entityService.remove(id);
				commit({ type: 'removeEntity', id });
			} catch (err) {
				console.error('Cannot remove entity', err);
				throw err;
			}
		},
		async getEntityById(_, { entityId }) {
			try {
				return await entityService.getById(entityId);
			} catch (err) {
				console.log(err);
			}
		},
		async filter({ commit, dispatch }, { filterBy }) {
			commit({ type: 'setFilter', filterBy });
			await dispatch({ type: 'loadEntitys' });
		},
		async performEntity({ commit }, { entityId }) {
			try {
				const entity = await entityService.getById(entityId);
				const updatedEntity = await entityService.perfromEntity(entity);
				commit({ type: 'saveEntity', entity: updatedEntity });
			} catch (err) {
				console.log(err);
			}
		},
	},
};
