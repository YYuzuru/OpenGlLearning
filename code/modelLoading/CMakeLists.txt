cmake_minimum_required(VERSION 3.26)

set(SOURCE_FILES main.cpp
        "../engine/Shader.h"
        "../engine/stb_image.h"
        "../engine/Camera.h"
        "Mesh.h"
        "Model.h"

)
set(EXE_FILE Model)

add_executable(${EXE_FILE} ${SOURCE_FILES})

target_compile_features(${EXE_FILE} PRIVATE cxx_std_17)

target_link_libraries(${EXE_FILE} PRIVATE glad glfw glm soloud tinygltf EnTT::EnTT assimp)

add_custom_command(TARGET ${EXE_FILE} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_SOURCE_DIR}/assets $<TARGET_FILE_DIR:${EXE_FILE}>/assets)