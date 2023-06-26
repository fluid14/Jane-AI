import deleteAction from '../../../services/action/delete';
import getActions from '../../../services/action/get';
import putAction from '../../../services/action/put';
import postAction from '../../../services/action/post';

export default async (req, res) => {
  const { method, body, query } = await req;

  switch (method) {
    case 'GET': {
      const actions = await getActions();
      res.status(200).json(actions);
      break;
    }
    case 'POST': {
      try {
        const action = await postAction(body);
        res.status(200).json({ status: 'created', action });
      } catch (err) {
        res.status(422).json({ status: 'not_created', err });
      }
      break;
    }
    case 'PUT': {
      try {
        const action = await putAction(body);
        res.status(200).json({ status: 'updated', action });
      } catch (err) {
        res.status(422).json({ status: 'not_updated', err });
      }
      break;
    }
    case 'DELETE': {
      const { record } = query;
      const deletedRecord = await deleteAction(record);
      res.status(200).json({ status: 'deleted', deletedRecord });
      break;
    }
    default:
      res.status(400);
  }
};
