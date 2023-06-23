import DB from '../airtable.service';

const deleteActions = async (records) => {
  return await DB('Resources').destroy(records);
};

export default deleteActions;
