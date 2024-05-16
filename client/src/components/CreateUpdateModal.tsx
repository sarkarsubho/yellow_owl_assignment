import { Dispatch, SetStateAction } from "react";
import { ModalType, Student } from "../utils/constants";
import {
  Box,
  Button,
  Flex,
  Hide,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit as EditIcon } from "react-icons/fa";
import toast from "react-hot-toast";

interface ModalProps extends Student {
  type: ModalType;
  setFormData: Dispatch<SetStateAction<Student>>;
  changeState: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: any;
}

const CreateUpdateModal = ({
  _id,
  name,
  email,
  phone,
  enrollNo,
  dateOfAdmission,
  type,
  changeState,
  handleSubmit,
  setFormData,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCancel = (): void => {
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      enrollNo: "",
      dateOfAdmission: "",
    });
  };

  const handleEdit = (): void => {
    onOpen();
    setFormData({
      _id,
      name,
      email,
      phone,
      enrollNo,
      dateOfAdmission,
    });
  };

  const validateSubmit = () => {
    const currentData: Student = {
      name,
      email,
      phone,
      enrollNo,
      dateOfAdmission,
    };
    // checking if any field is empty
    let isEmpty: boolean = false;

    Object.values(currentData).forEach((key) => {
      if (key === "") {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      // console.log("error");
      toast.error("Every field should be filled....");
    } else {
      onClose();
      handleSubmit(type);
    }
  };

  return (
    <>
      {type === ModalType.Create ? (
        <Button
          onClick={onOpen}
          bg={"#22C55E"}
          colorScheme="green"
          w={["100px", "100px", "300px"]}
        >
          Add
          <Hide below="md">
            <Box pl={"5px"}> New Student</Box>
          </Hide>
        </Button>
      ) : (
        <Box
          onClick={handleEdit}
          _hover={{
            background: "local",
            border: "none",
          }}
          cursor={"pointer"}
        >
          <EditIcon color="blue" />
        </Box>
      )}
      <Modal
        isCentered
        onClose={handleCancel}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <Box padding={"200px"}>
          <ModalOverlay bg="#9FA4AB" />
          <ModalContent p={"3rem"}>
            <ModalHeader>
              {" "}
              {type === ModalType.Create ? "Add New" : "Edit"} Student
            </ModalHeader>

            <ModalBody>
              <VStack gap={"20px"}>
                <Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={changeState}
                  autoComplete="name"
                />
                <Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={changeState}
                  autoComplete="email"
                />
                <Input
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={changeState}
                  autoComplete="phone"
                />
                <Input
                  placeholder="Enroll Number"
                  name="enrollNo"
                  value={enrollNo}
                  onChange={changeState}
                />
                <Input
                  placeholder="Date of Admission"
                  name="dateOfAdmission"
                  value={dateOfAdmission}
                  onChange={changeState}
                />
              </VStack>
            </ModalBody>
            {/* <ModalFooter> */}
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"15px"}
              p={"10px 0"}
            >
              <Button
                colorScheme="green"
                bg={"#22C55E"}
                width={"60%"}
                onClick={validateSubmit}
              >
                {type === ModalType.Create ? " Submit" : "Update"}
              </Button>
              <Button
                colorScheme="red"
                bg={"#C55D22"}
                width={"60%"}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Flex>
            {/* </ModalFooter> */}
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

export default CreateUpdateModal;
