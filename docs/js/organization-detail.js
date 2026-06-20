import {
    getOrganizationById,
    getOrganizationMembers
} from './organization.js'

const params = new URLSearchParams(window.location.search)
const orgId = params.get('id')

const orgInfo = document.getElementById('orgInfo')
const memberList = document.getElementById('memberList')

async function loadOrganization() {
    const org = await getOrganizationById(orgId)

    if (!org) {
        orgInfo.innerHTML = '<p>Organization not found.</p>'
        return
    }

    orgInfo.innerHTML = `
        <h2>${org.name}</h2>
        <p>${org.description || '-'}</p>
        <p>Status: ${org.status}</p>
    `
}

async function loadMembers() {
    const members = await getOrganizationMembers(orgId)

    memberList.innerHTML = ''

    if (!members.length) {
        memberList.innerHTML = '<p>No members.</p>'
        return
    }

    members.forEach(member => {
        const div = document.createElement('div')

        div.innerHTML = `
            <p>${member.users.fullname}</p>
            <p>${member.users.email}</p>
            <p>Position: ${member.position}</p>
            <p>Status: ${member.status}</p>
            <hr>
        `

        memberList.appendChild(div)
    })
}

loadOrganization()
loadMembers()
