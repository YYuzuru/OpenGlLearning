# Minimal CMake to include soloud as a dependency
# Default contrib/CMakeLists.txt does not properly export includes and is not well maintained

cmake_minimum_required(VERSION 3.12)

project(soloud)

# Enable the Configure script
set (CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/contrib/cmake;${CMAKE_MODULE_PATH}")
include(contrib/Configure.cmake)

# Add the actual source
add_subdirectory(src)
