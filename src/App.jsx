import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Navbar from './components/Navbar';
import WeatherWrapper from './components/WeatherWrapper';
import WeatherProvider from './providers/WeatherProvider';
import Footer from './components/Footer';

dayjs.extend(utc);

export default function App() {
  return (
    <div className="grid place-items-center bg-slate-100 min-h-dvh text-slate-600">
      <div className="max-w-sm w-full">
        <WeatherProvider>
          <Navbar />
          <main className="grid place-items-center px-3">
            <WeatherWrapper />
          </main>
        </WeatherProvider>
        <Footer />
      </div>
    </div>
  );
}
