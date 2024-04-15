// random profile pic genarator to use as default
export const profilePicGenerator = (email) => {
    const hash = crypto.createHash('md5').update(email).digest('hex')
    return `https://www.gravatar.com/avatar/${hash}?d=retro`
}
