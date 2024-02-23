#version 330 core
out vec4 FragColor;

in vec3 Normal;
in vec3 FragPos;


uniform vec3 viewPos;
uniform vec3 lightPos;
uniform vec3 ourColor;
uniform vec3 lightColor;
uniform float ambientStrength = .1f;
uniform bool useDiffuse = true;

float specularStrength = 0.5;

void main()
{
    vec3 result = vec3(1);

    if(useDiffuse){
        vec3 ambient = ambientStrength * lightColor;

        vec3 norm = normalize(Normal);
        vec3 lightDir = normalize(lightPos - FragPos);
        float diff = max(dot(norm, lightDir), 0.0);
        vec3 diffuse = diff * lightColor;

        vec3 viewDir = normalize(viewPos - FragPos);
        vec3 reflectDir = reflect(-lightDir, norm);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
        vec3 specular = specularStrength * spec * lightColor;

        result = (ambient + diffuse+specular) * ourColor;
    }

    FragColor = vec4(result, 1.0);
}