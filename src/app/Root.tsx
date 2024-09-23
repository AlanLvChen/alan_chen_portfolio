import { SpeedInsights } from '@vercel/speed-insights/next';
import HomePage from './main/HomePage';
const Root = () => {

  return (
    <>
      <HomePage />
      <SpeedInsights /></>
  )
}

export default Root;
