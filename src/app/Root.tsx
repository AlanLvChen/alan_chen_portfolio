import { SpeedInsights } from '@vercel/speed-insights/next';
import HomePage from '../pages/HomePage';
const Root = () => {

  return (
    <>
      <HomePage />
      <SpeedInsights /></>
  )
}

export default Root;
