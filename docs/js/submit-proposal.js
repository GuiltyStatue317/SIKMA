import { submitProposal } from './organization.js'

const params = new URLSearchParams(window.location.search)
const orgId = params.get('org')
const form = document.getElementById('proposalForm')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        organization_id: Number(orgId),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        file_url: document.getElementById('file_url').value,
        status: 'pending'
    }

    const success = await submitProposal(payload)

    if (!success) {
        alert('Submit gagal')
        return
    }

    alert('Proposal submitted')
    window.location.href = `./organization-detail.html?id=${orgId}`
})
