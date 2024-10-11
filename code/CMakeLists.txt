cmake_minimum_required(VERSION 3.26)
project(openGL)
set(CMAKE_CXX_STANDARD 17)

add_subdirectory(extern/glad)
add_subdirectory(extern/entt)
add_subdirectory(extern/glfw)
add_subdirectory(extern/glm)
add_subdirectory(extern/soloud)
add_subdirectory(extern/tinygltf)
add_subdirectory(extern/assimp)


add_subdirectory(game)
add_subdirectory(modelLoading)
