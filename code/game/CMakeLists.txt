cmake_minimum_required(VERSION 3.26)

set(SOURCE_FILES main.cpp
        Shader.h
        Shader.h
        stb_image.h
        Camera.h
        Camera.h
)
set(EXE_FILE Game)

add_executable(${EXE_FILE} ${SOURCE_FILES})

target_compile_features(${EXE_FILE} PRIVATE cxx_std_17)

target_link_libraries(${EXE_FILE} PRIVATE glad glfw glm soloud tinygltf EnTT::EnTT)

add_custom_command(TARGET ${EXE_FILE} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_SOURCE_DIR}/assets $<TARGET_FILE_DIR:${EXE_FILE}>/assets)