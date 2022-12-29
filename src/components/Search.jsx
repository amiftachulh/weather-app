import { Icon } from '@iconify/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Search(props) {
  return (
    <Tippy
      content={
        <>
          <div>Format :</div>
          <code>city_name</code> || <code>city_name, country_id</code>
          <div className="mt-2">Example :</div>
          <ul>
            <li>
              <code>jakarta</code>
            </li>
            <li>
              <code>jakarta, id</code>
            </li>
          </ul>
        </>
      }
    >
      <form
        className="search-container flex w-80 justify-between px-2 py-1"
        onSubmit={props.onSubmit}
      >
        <input
          type="text"
          className="search-container__input flex-1 border border-transparent border-b-slate-300 bg-transparent py-1 px-1 text-slate-100 placeholder-slate-300 outline-none focus:border-b-slate-100"
          placeholder="Search..."
          value={props.value}
          onChange={props.onChange}
        />
        <button
          id="search-btn"
          className="search-container__icon text-slate-100"
        >
          <Icon icon="ic:baseline-search" height="1.5rem" />
        </button>
      </form>
    </Tippy>
  );
}
