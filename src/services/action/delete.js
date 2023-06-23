import DB from '../airtable.service';

const deleteAction = async (records) => {
  return await DB('Resources').destroy(records);
};

export default deleteAction;
