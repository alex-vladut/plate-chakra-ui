import { Box, ChakraProvider } from '@chakra-ui/react';
import FullTextEditor from './FullTextEditor';

function App() {
  return (
    <ChakraProvider>
      <Box p="4">
        <FullTextEditor id="editor" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
