cmake_minimum_required(VERSION 3.26)

set(SOURCE_FILES main.cpp)
set(EXE_FILE Game)

add_executable(${EXE_FILE} ${SOURCE_FILES})

target_compile_features(${EXE_FILE} PRIVATE cxx_std_17)

target_link_libraries(${EXE_FILE} PRIVATE glad glfw glm soloud tinygltf EnTT::EnTT)
