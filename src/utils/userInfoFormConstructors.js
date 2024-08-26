export const userInfoFormConstructor = (formData) => {
    const newFormData = {
        fullName: formData.fullName,
        aboutMe: formData.aboutMe,
        lookingForAJobDescription: formData.lookingForAJobDescription,
        contacts: {
            facebook: formData.facebook,
            website: formData.website,
            vk: formData.vk,
            twitter: formData.twitter,
            instagram: formData.instagram,
            youtube: formData.youtube,
            github: formData.github,
            mainLink: formData.mainLink
        }
    }
    Object.entries(newFormData).forEach(([key, value]) => {
        newFormData[key] = newFormData[key] || '-';
    })
    return newFormData
}

export const userInfoInitialValuesConstructor = (formData) => {
    const newFormData = {
        fullName: formData.fullName,
        aboutMe: formData.aboutMe,
        lookingForAJobDescription: formData.lookingForAJobDescription,
        facebook: formData.contacts.facebook,
        website: formData.contacts.website,
        vk: formData.contacts.vk,
        twitter: formData.contacts.twitter,
        instagram: formData.contacts.instagram,
        youtube: formData.contacts.youtube,
        github: formData.contacts.github,
        mainLink: formData.contacts.mainLink
    }
    Object.entries(newFormData).forEach(([key, value]) => {
        if (!newFormData || newFormData[key] === '-') {
            newFormData[key] = ''
        }
    })
    console.log(newFormData)
    return newFormData
}

