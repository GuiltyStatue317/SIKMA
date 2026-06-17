import {
    getOrganizations,
    joinOrganization
} from './organization.js'

const orgList = document.getElementById('orgList')

async function loadOrganizations() {
    const organizations = await getOrganizations()

    orgList.innerHTML = ''

    if (!organizations.length) {
        orgList.innerHTML = '<p>No organizations found.</p>'
        return
    }

    organizations.forEach(org => {
        const div = document.createElement('div')

        div.innerHTML = `
            <h3>${org.name}</h3>
            <p>${org.description || '-'}</p>
            <button data-id="${org.id}">
                Join
            </button>
            <hr>
        `

        const btn = div.querySelector('button')

        btn.addEventListener('click', async () => {
            const success = await joinOrganization(org.id)

            if (!success) {
                alert('Gagal join organisasi')
                return
            }

            alert('Berhasil join organisasi')
        })

        orgList.appendChild(div)
    })
}

loadOrganizations()
