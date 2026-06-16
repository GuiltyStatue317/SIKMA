import { createOrganization } from './organization.js'

const form = document.getElementById('orgForm')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        name: document.getElementById('name').value,
        short_name: document.getElementById('short_name').value,
        description: document.getElementById('description').value
    }

    const org = await createOrganization(payload)

    if (!org) {
        alert('Gagal membuat organisasi')
        return
    }

    alert('Organisasi berhasil dibuat')
    window.location.href = './dashboard.html'
})
