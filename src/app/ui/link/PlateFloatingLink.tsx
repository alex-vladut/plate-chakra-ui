import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  chakra,
  Icon,
} from '@chakra-ui/react';
import { EditIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  TEditableProps,
  FloatingLink,
  useFloatingLinkSelectors,
} from '@udecode/plate-headless';
import { BiLink, BiUnlink } from 'react-icons/bi';

const ChakraFloatingLinkUrlInput = chakra(FloatingLink.UrlInput);
const ChakraFloatingLinkTextInput = chakra(FloatingLink.TextInput);
const ChakraFloatingLinkEditButton = chakra(FloatingLink.EditButton);
const ChakraFloatingLinkOpenLinkButton = chakra(FloatingLink.OpenLinkButton);
const ChakraFloatingLinkUnlinkButton = chakra(FloatingLink.UnlinkButton);

export const PlateFloatingLink = ({ readOnly }: TEditableProps) => {
  const isEditing = useFloatingLinkSelectors().isEditing();

  if (readOnly) return null;

  const input = (
    <Flex
      w="330px"
      flexDirection="column"
      rounded="md"
      bg="white"
      color="black"
      shadow="sm"
    >
      <Flex py="1" pr="2" alignItems="center">
        <Box px="2">
          <Icon as={BiLink} boxSize="4" />
        </Box>
        <ChakraFloatingLinkUrlInput
          h="8"
          border="none"
          bg="transparent"
          p="0"
          placeholder="Paste link"
          _focus={{ borderColor: 'none' }}
        />
      </Flex>
      <Divider borderColor="gray.200" />
      <Flex py="1" pr="2" alignItems="center">
        <Box px="2">
          <EditIcon boxSize="4" />
        </Box>
        <ChakraFloatingLinkTextInput
          h="8"
          border="none"
          bg="transparent"
          p="0"
          placeholder="Text to display"
          _focus={{ borderColor: 'none' }}
        />
      </Flex>
    </Flex>
  );

  const editContent = !isEditing ? (
    <Flex
      alignItems="center"
      rounded="md"
      bg="white"
      px="2"
      py="1"
      color="black"
      shadow="sm"
    >
      <ChakraFloatingLinkEditButton
        as={Button}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        maxW="full"
        p="0"
        border="0"
        fontSize="md"
        bg="white"
        _hover={{ bg: 'gray.100' }}
        _active={{ bg: 'gray.200' }}
        px="2.5"
        py="1"
        cursor="pointer"
      >
        Edit link
      </ChakraFloatingLinkEditButton>

      <Divider orientation="vertical" borderColor="gray.200" />

      <ChakraFloatingLinkOpenLinkButton
        as={IconButton}
        icon={<ExternalLinkIcon boxSize="4" />}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        maxW="full"
        p="0"
        border="0"
        fontSize="md"
        bg="white"
        _hover={{ bg: 'gray.100' }}
        _active={{ bg: 'gray.200' }}
        px="1"
        py="1"
        cursor="pointer"
      />

      <Divider orientation="vertical" borderColor="gray.200" />

      <ChakraFloatingLinkUnlinkButton
        as={IconButton}
        icon={<Icon as={BiUnlink} boxSize="4" />}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        maxW="full"
        p="0"
        border="0"
        fontSize="md"
        bg="white"
        _hover={{ bg: 'gray.100' }}
        _active={{ bg: 'gray.200' }}
        px="1"
        py="1"
        cursor="pointer"
      />
    </Flex>
  ) : (
    input
  );

  return (
    <>
      <Box
        bg="white"
        position="relative"
        zIndex="9999"
        w="auto"
        rounded="md"
        shadow="md"
      >
        <FloatingLink.InsertRoot>{input}</FloatingLink.InsertRoot>
      </Box>

      <Box
        bg="white"
        position="relative"
        zIndex="9999"
        w="auto"
        rounded="md"
        shadow="md"
      >
        <FloatingLink.EditRoot>{editContent}</FloatingLink.EditRoot>
      </Box>
    </>
  );
};
