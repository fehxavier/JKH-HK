let clients = [];

function formatId(id) {
    return String(id).padStart(3, '0'); 
}


function formatCpf(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    return cpf.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function toggleClientForm() {
    const formSection = document.getElementById('clientFormSection');
    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}

function showAddClientForm() {
    document.getElementById('clientFormSection').style.display = 'block';
    document.getElementById('clientFormTitle').textContent = 'Adicionar Cliente';
    document.getElementById('clientForm').reset();
}

function submitClientForm(event) {
    event.preventDefault();
    const id = document.getElementById('clientId').value;
    const name = document.getElementById('clientName').value;
    const cpf = formatCpf(document.getElementById('clientCPF').value);
    const phone = document.getElementById('clientPhone').value;
    const email = document.getElementById('clientEmail').value;
    const address = document.getElementById('clientAddress').value;

    if (id) {
        const index = clients.findIndex(client => client.id === id);
        clients[index] = { id, name, cpf, phone, email, address };
    } else {
        const formattedId = formatId(clients.length + 1); 
        const newClient = { id: formattedId, name, cpf, phone, email, address };
        clients.push(newClient);
    }

    updateClientTable();
    cancelClientForm();
}

function updateClientTable() {
    const tbody = document.getElementById('clientTable').querySelector('tbody');
    tbody.innerHTML = '';

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.id}</td>
            <td>${client.cpf}</td>
            <td>
                <button class="action-button" onclick="editClient('${client.id}')">Editar</button>
                <button class="action-button" onclick="deleteClient('${client.id}')">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editClient(id) {
    const client = clients.find(c => c.id === id);
    if (client) {
        document.getElementById('clientId').value = client.id;
        document.getElementById('clientName').value = client.name;
        document.getElementById('clientCPF').value = client.cpf.replace(/\D/g, '');
        document.getElementById('clientPhone').value = client.phone;
        document.getElementById('clientEmail').value = client.email;
        document.getElementById('clientAddress').value = client.address;

        document.getElementById('clientFormTitle').textContent = 'Editar Cliente';
        toggleClientForm();
    }
}

function deleteClient(id) {
    clients = clients.filter(client => client.id !== id);
    updateClientTable();
}

function cancelClientForm() {
    document.getElementById('clientFormSection').style.display = 'none';
    document.getElementById('clientForm').reset();
}


updateClientTable();
