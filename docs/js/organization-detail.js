import {
    getOrganizationById,
    getOrganizationMembers,
    getOrganizationProposals
} from './organization.js'

const params = new URLSearchParams(window.location.search)
const orgId = params.get('id')
const orgInfo = document.getElementById('orgInfo')
const memberList = document.getElementById('memberList')
const proposalList = document.getElementById('proposalList')
const submitProposalBtn = document.getElementById('submitProposalBtn')
submitProposalBtn.href = `./submit-proposal.html?org=${orgId}`


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

async function loadProposals() {
    const proposals =
        await getOrganizationProposals(orgId)

    proposalList.innerHTML = ''

    if (!proposals.length) {
        proposalList.innerHTML =
            '<p>No proposals yet.</p>'
        return
    }

    proposals.forEach(proposal => {
        const div = document.createElement('div')

        div.innerHTML = `
            <h4>${proposal.title}</h4>
            <p>${proposal.description || '-'}</p>
            <p>Status: ${proposal.status}</p>
            <hr>
        `

        proposalList.appendChild(div)
    })
}


loadOrganization()
loadMembers()
loadProposals()
