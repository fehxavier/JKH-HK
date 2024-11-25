let suppliers = [];


function formatId(id) {
    return String(id).padStart(3, '0'); 
}


function formatCpfCnpj(cpfCnpj) {
    cpfCnpj = cpfCnpj.replace(/\D/g, '');
    if (cpfCnpj.length === 11) {
        return cpfCnpj.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (cpfCnpj.length === 14) {
        return cpfCnpj.replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1/$2').replace(/(\d{4})(\d{2})$/, '$1-$2');
    }
    return cpfCnpj;
}

function toggleSupplierForm() {
    const formSection = document.getElementById('supplierFormSection');
    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}

function submitSupplierForm(event) {
    event.preventDefault();
    const supplierId = document.getElementById('supplierId').value;
    const supplierName = document.getElementById('supplierName').value;
    const supplierCPF = formatCpfCnpj(document.getElementById('supplierCPF').value);
    const supplierPhone = document.getElementById('supplierPhone').value;
    const supplierEmail = document.getElementById('supplierEmail').value;
    const supplierAddress = document.getElementById('supplierAddress').value;
    const supplierProducts = document.getElementById('supplierProducts').value;
    const supplierLicenses = document.getElementById('supplierLicenses').value;

    const formattedId = formatId(suppliers.length + 1);

    if (supplierId) {
        const index = suppliers.findIndex(supplier => supplier.id === supplierId);
        suppliers[index] = {
            id: supplierId,
            name: supplierName,
            cpf: supplierCPF,
            phone: supplierPhone,
            email: supplierEmail,
            address: supplierAddress,
            products: supplierProducts,
            licenses: supplierLicenses
        };
    } else {
        const newSupplier = {
            id: formattedId,
            name: supplierName,
            cpf: supplierCPF,
            phone: supplierPhone,
            email: supplierEmail,
            address: supplierAddress,
            products: supplierProducts,
            licenses: supplierLicenses
        };
        suppliers.push(newSupplier);
    }

    updateSupplierTable();
    cancelSupplierForm();
}

function updateSupplierTable() {
    const tableBody = document.getElementById('supplierTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    suppliers.forEach(supplier => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = supplier.name;
        row.insertCell(1).innerText = supplier.id;
        row.insertCell(2).innerText = supplier.cpf;
        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button class="action-button" onclick="editSupplier(${supplier.id})">Editar</button>
                                <button class="action-button" onclick="deleteSupplier(${supplier.id})">Excluir</button>`;
    });
}

function editSupplier(id) {
    const supplier = suppliers.find(s => s.id === id.toString());
    if (supplier) {
        document.getElementById('supplierId').value = supplier.id;
        document.getElementById('supplierName').value = supplier.name;
        document.getElementById('supplierCPF').value = supplier.cpf.replace(/\D/g, '');
        document.getElementById('supplierPhone').value = supplier.phone;
        document.getElementById('supplierEmail').value = supplier.email;
        document.getElementById('supplierAddress').value = supplier.address;
        document.getElementById('supplierProducts').value = supplier.products;
        document.getElementById('supplierLicenses').value = supplier.licenses;

        toggleSupplierForm();
        document.getElementById('supplierFormTitle').innerText = 'Editar Fornecedor';
    }
}

function deleteSupplier(id) {
    suppliers = suppliers.filter(supplier => supplier.id !== id.toString());
    updateSupplierTable();
}

function cancelSupplierForm() {
    document.getElementById('supplierForm').reset();
    document.getElementById('supplierId').value = '';
    document.getElementById('supplierFormTitle').innerText = 'Adicionar Fornecedor';
    toggleSupplierForm();
}

updateSupplierTable();
