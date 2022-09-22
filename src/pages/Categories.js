import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

function Catagories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const update = (e) => {
    e.preventDefault();
    dispatch(statusChecker());
    document.querySelector('#check-status').style.display = 'none';
    document.querySelector('#status').style.display = 'block';
  };
  return (
    <>
      <div className="h-4/5 flex items-center justify-center" id="check-status">
        <button type="button" className="bg-sky-400 text-white rounded py-2 px-16 mt-2px" onClick={update}>Check Status</button>
      </div>
      <h2 className="hidden text-4xl font-medium ml-20 mt-16" id="status">{categories}</h2>
    </>
  );
}

export default Catagories;
