function getEnvVariable(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`${key} is not defined`);
    }
    return value;
}

export { getEnvVariable };
