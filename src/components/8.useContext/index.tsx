import { ThemeContextProvider } from './ThemeContext';
import Box from './Box';

export default function Apps() {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
}
