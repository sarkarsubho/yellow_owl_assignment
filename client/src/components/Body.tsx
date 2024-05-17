import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Hide,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import CreateUpdateModal from "./CreateUpdateModal";
import { RiDeleteBin5Fill as DeleteIcon } from "react-icons/ri";

import { ModalType, Student } from "../utils/constants";
import { useEffect, useState } from "react";
import NameCard from "./NameCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const server = import.meta.env.VITE_BACKEND;

const Body = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [students, setStudents] = useState<Student[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const [formData, setFormData] = useState<Student>({
    name: "",
    email: "",
    phone: "",
    enrollNo: "",
    dateOfAdmission: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    axios
      .get(`${server}/search?s=${searchInput}`)
      .then(({ data }) => {
        console.log(data.students);
        setStudents(data.students);
      })
      .catch((er: Error) => {
        console.log(er);
      });
  }, [searchInput]);

  const handleSubmit = (type: ModalType) => {
    console.log(type, formData);
    const toastId = toast.loading("submitting student data...");
    if (type === ModalType.Create) {
      axios
        .post(`${server}/postStudent`, formData)
        .then((res) => {
          // { success: true, student: newStudent }
          toast.success("Student added Successfully..", {
            id: toastId,
          });
          setStudents([...students, res.data.student]);
          setFormData({
            name: "",
            email: "",
            phone: "",
            enrollNo: "",
            dateOfAdmission: "",
          });
        })
        .catch((er: Error) => {
          console.log(er);
          toast.error("Something went Wrong on post data...", {
            id: toastId,
          });
        });
    } else {
      axios
        .patch(`${server}/updateStudent/${formData._id}`, formData)
        .then((res) => {
          // { success: true, student: newStudent }
          let updatedStudent = res.data.student;

          let updatedStudents = students.map((e) =>
            e._id === updatedStudent._id ? updatedStudent : e
          );
          setStudents(updatedStudents);
          setFormData({
            name: "",
            email: "",
            phone: "",
            enrollNo: "",
            dateOfAdmission: "",
          });
          toast.success("Student updated Successfully..", {
            id: toastId,
          });
        })
        .catch((er: Error) => {
          console.log(er);
          toast.error("Something went Wrong on update data...", {
            id: toastId,
          });
        });
    }
  };

  const handleDelete = (id: any) => {
    console.log("delete _id", id);
    const toastId = toast.loading("Deleting student...");
    axios
      .delete(`${server}/deleteStudent/${id}`)
      .then((res) => {
        let deletedStudent = res.data.student;

        let updatedStudents = students.filter((e) => e._id !== deletedStudent);
        setStudents(updatedStudents);
        toast.success("Student deleted Successfully..", {
          id: toastId,
        });
      })
      .catch((er: Error) => {
        console.log(er);
        toast.error("Something went Wrong on update data...", {
          id: toastId,
        });
      });
  };

  useEffect(() => {
    const toastId = toast.loading("Getting student...");
    axios
      .get(`${server}/getStudent`)
      .then(({ data }) => {
        console.log(data.students);
        setStudents(data.students);
        toast.success("Done.", {
          id: toastId,
        });
      })
      .catch((er: Error) => {
        console.log(er);
        toast.error("Something went wrong...", {
          id: toastId,
        });
      });
  }, []);
  return (
    <Box bg={"#E5E7EB"} height={"90vh"}>
      <Toaster position="bottom-center" reverseOrder={true} />
      <VStack h={"90vh"} p={5}>
        <HStack
          w={"100%"}
          py={2}
          borderRadius={"10px"}
          px={5}
          justify={"space-between"}
        >
          <Box>
            <Heading as="h2" size="lg">
              Students
            </Heading>
          </Box>
          <Flex maxW={"70%"} gap={"10px"}>
            <Input
              type="text"
              placeholder="Search by name..."
              bgColor={"white"}
              value={searchInput}
              onChange={handleSearchChange}
            />

            <CreateUpdateModal
              type={ModalType.Create}
              {...formData}
              changeState={handleChange}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          </Flex>
        </HStack>
        <TableContainer
          w={"100%"}
          shadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          }
          borderRadius={"8px"}
        >
          <Table variant="simple">
            <Thead bg={"#F9FAFB"} padding={"10px"} textAlign={"center"}>
              <Tr>
                <Th textAlign={"center"}>NAME</Th>
                <Th textAlign={"center"}>EMAIL</Th>
                <Hide below="md">
                  <Th textAlign={"center"}>PHONE</Th>
                </Hide>
                <Hide below="md">
                  <Th textAlign={"center"}>ENROLL NUMBER</Th>
                </Hide>
                <Hide below="md">
                  <Th textAlign={"center"}>DATE OF ADMISSION</Th>
                </Hide>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody bg={"#FFFFFF"} m={"10px"}>
              {students.length > 0 &&
                students.map((student) => (
                  <Tr
                    p={"10px"}
                    style={{
                      padding: "10px",
                    }}
                    key={student._id}
                  >
                    <Td textAlign={"left"}>
                      <NameCard name={student.name} />
                    </Td>
                    <Td textAlign={"center"}>{student.email}</Td>
                    <Hide below="md">
                      <Td textAlign={"center"}>{student.phone}</Td>
                    </Hide>
                    <Hide below="md">
                      <Td textAlign={"center"}>{student.enrollNo}</Td>
                    </Hide>
                    <Hide below="md">
                      <Td textAlign={"center"}>{student.dateOfAdmission}</Td>
                    </Hide>

                    <Td textAlign={"center"}>
                      <>
                        <Flex justifyContent={"start"} gap={"10px"}>
                          <Box onClick={() => setFormData(student)}>
                            <CreateUpdateModal
                              type={ModalType.Update}
                              {...formData}
                              changeState={handleChange}
                              setFormData={setFormData}
                              handleSubmit={handleSubmit}
                            />
                          </Box>
                          <Box
                            onClick={onOpen}
                            _hover={{
                              background: "local",
                              border: "none",
                            }}
                            cursor={"pointer"}
                          >
                            <DeleteIcon color="red" />
                          </Box>
                        </Flex>
                        <Modal
                          isCentered
                          onClose={onClose}
                          isOpen={isOpen}
                          motionPreset="slideInBottom"
                        >
                          <Box padding={"200px"}>
                            <ModalOverlay bg="#9FA4AB" />
                            <ModalContent p={"3rem"}>
                              <ModalBody fontWeight={600} fontSize={"18px"}>
                                Are you sure to delete this Student ?
                              </ModalBody>

                              <Flex
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={"15px"}
                                p={"10px 0"}
                              >
                                <Button
                                  colorScheme="green"
                                  bg={"#22C55E"}
                                  width={"60%"}
                                  onClick={() => {
                                    handleDelete(student._id);
                                    onClose();
                                  }}
                                >
                                  Yes
                                </Button>
                                <Button
                                  colorScheme="red"
                                  bg={"#C55D22"}
                                  width={"60%"}
                                  onClick={onClose}
                                >
                                  No
                                </Button>
                              </Flex>
                            </ModalContent>
                          </Box>
                        </Modal>
                      </>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};

export default Body;
