import { createEvent } from './organization.js'

const params = new URLSearchParams(window.location.search)
const orgId = params.get('org')
const form = document.getElementById('eventForm')


form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        organization_id: Number(orgId),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        start_date: document.getElementById('start_date').value,
        end_date: document.getElementById('end_date').value
    }

    const success = await createEvent(payload)

    if (!success) {
        alert('Gagal membuat event')
        return
    }

    alert('Event berhasil dibuat')

    window.location.href =
        `./organization-detail.html?id=${orgId}`
})
