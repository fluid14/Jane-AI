import DB from '../airtable.service';

const putAction = async (payload) => await DB('Resources').update([payload]);

export default putAction;
