import { getMyOrganizations } from './organization.js'

const myOrgList = document.getElementById('myOrgList')

async function loadMyOrganizations() {
    const memberships = await getMyOrganizations()

    myOrgList.innerHTML = ''

    if (!memberships.length) {
        myOrgList.innerHTML = '<p>You are not in any organization.</p>'
        return
    }

    memberships.forEach(member => {
        const org = member.organizations

        const div = document.createElement('div')

        div.innerHTML = `
            <h3>${org.name}</h3>
            <p>Position: ${member.position}</p>
            <p>Status: ${member.status}</p>
            <p>${org.description || '-'}</p>

            <a href="./organization-detail.html?id=${org.id}">
                Open Organization
            </a>

            <hr>
        `

        myOrgList.appendChild(div)
    })
}

loadMyOrganizations()
