# Include the contrib/src.cmake as it uses relative paths
include(../contrib/src.cmake)

# explicitly add the include directories
target_include_directories(soloud PUBLIC ../include)