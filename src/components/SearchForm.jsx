import { Icon } from '@iconify/react';

export default function SearchForm(props) {
  return (
    <form
      className={props.className}
      onSubmit={(event) => props.handleSubmit(event)}
    >
      <input
        type="text"
        className="flex-grow bg-transparent pl-1 outline-none"
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.setUserInput(event.target.value)}
      />

      <button id="search-btn" className="icon">
        <Icon icon="ic:baseline-search" width="1.5rem" height="1.5rem" />
      </button>
    </form>
  );
}
