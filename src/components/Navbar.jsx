import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import SearchForm from './SearchForm';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export default function Navbar(props) {
  const settingsMenuRef = useRef();
  const aboutMenuRef = useRef();
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useOnClickOutside(settingsMenuRef, () => {
    if (settingsOpen) setSettingsOpen(false);
  });

  useOnClickOutside(aboutMenuRef, () => {
    if (aboutOpen) setAboutOpen(false);
  });

  return (
    <nav className="flex h-12 w-full items-center justify-end gap-2 px-4">
      {!searchOpen && (
        <>
          <button className="search sm:hidden">
            <Icon
              icon="ic:baseline-search"
              width="1.75rem"
              height="1.75rem"
              onClick={() => setSearchOpen(true)}
            />
          </button>

          <SearchForm
            className="search-container mr-1 hidden h-7 flex-grow-0 justify-between rounded-[5rem] px-3 sm:flex"
            handleSubmit={props.handleSubmit}
            value={props.userInput}
            setUserInput={props.setUserInput}
          />

          <button className="refresh" onClick={props.refresh}>
            <Icon
              icon="material-symbols:refresh-rounded"
              width="1.75rem"
              height="1.75rem"
            />
          </button>

          <button className="settings" ref={settingsMenuRef}>
            <Icon
              icon="ph:gear"
              width="1.6rem"
              height="1.6rem"
              onClick={() => setSettingsOpen((prev) => !prev)}
            />

            {settingsOpen && (
              <ul className="settings-menu absolute left-1/2 top-12 z-[1] w-11/12 -translate-x-1/2 cursor-default rounded-lg bg-[#111] sm:left-auto sm:right-4 sm:w-80 sm:translate-x-0">
                <div className="title pt-2 font-bold">Settings</div>
                <ul className="content p-2">
                  <li className="flex justify-between">
                    <span>Units</span>
                    <span
                      className="cursor-pointer rounded-lg bg-sky-600 px-2 sm:hover:bg-sky-500"
                      onClick={props.changeUnits}
                    >
                      {props.isMetric ? 'Metric' : 'Imperial'}
                    </span>
                  </li>
                </ul>
              </ul>
            )}
          </button>

          <button className="about" ref={aboutMenuRef}>
            <Icon
              icon="mdi:about-circle-outline"
              width="1.6rem"
              height="1.6rem"
              onClick={() => setAboutOpen((prev) => !prev)}
            />

            {aboutOpen && (
              <div className="about-menu absolute left-1/2 top-12 z-[1] w-11/12 -translate-x-1/2 cursor-default rounded-lg bg-[#111] p-3 text-left sm:left-auto sm:right-4 sm:w-80 sm:translate-x-0">
                <p>This is a weather app for my portfolio.</p>
                <br />
                <a
                  className="text-blue-500"
                  href="https://github.com/amiftachulh/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </button>
        </>
      )}

      <div
        className={`${
          searchOpen ? 'flex' : 'hidden'
        } flex-grow items-center justify-between gap-2`}
      >
        <button className="back-icon" onClick={() => setSearchOpen(false)}>
          <Icon icon="fa6-solid:arrow-left" />
        </button>
        <SearchForm
          className="search-container flex h-7 flex-grow justify-between rounded-[5rem] px-2"
          handleSubmit={props.handleSubmit}
          value={props.userInput}
          setUserInput={props.setUserInput}
        />
      </div>
    </nav>
  );
}
