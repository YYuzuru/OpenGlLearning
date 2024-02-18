# file: extern/tinygltf/CMakeLists.txt

add_library(tinygltf STATIC src/tinygltf.cpp)
target_compile_features(tinygltf PRIVATE cxx_std_17)
target_include_directories(tinygltf PUBLIC include/)