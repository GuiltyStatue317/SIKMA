import {
    getOrganizationProposals,
    reviewProposal
} from './organization.js'

const params = new URLSearchParams(window.location.search)
const orgId = params.get('org')

const proposalReviewList =
    document.getElementById('proposalReviewList')

async function loadProposals() {
    const proposals =
        await getOrganizationProposals(orgId)

    proposalReviewList.innerHTML = ''

    proposals.forEach(proposal => {
        const div = document.createElement('div')

        div.innerHTML = `
            <h3>${proposal.title}</h3>
            <p>${proposal.description || '-'}</p>
            <p>Status: ${proposal.status}</p>

            <textarea
                id="note-${proposal.id}"
                placeholder="Review notes"
            ></textarea>

            <button data-id="${proposal.id}" data-status="approved">
                Approve
            </button>

            <button data-id="${proposal.id}" data-status="rejected">
                Reject
            </button>

            <button data-id="${proposal.id}" data-status="revision">
                Revision
            </button>

            <hr>
        `

        const buttons = div.querySelectorAll('button')

        buttons.forEach(btn => {
            btn.addEventListener('click', async () => {
                const proposalId = btn.dataset.id
                const status = btn.dataset.status
                const notes =
                    document.getElementById(
                        `note-${proposalId}`
                    ).value

                const success =
                    await reviewProposal(
                        proposalId,
                        status,
                        notes
                    )

                if (!success) {
                    alert('Review gagal')
                    return
                }

                alert('Review berhasil')
                loadProposals()
            })
        })

        proposalReviewList.appendChild(div)
    })
}

loadProposals()
