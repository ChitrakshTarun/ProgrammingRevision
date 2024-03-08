interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	if ("isAdmin" in account) {
		// if isAdmin exists in account
		console.log(account.name + " is an admin."); // Now here account can only be Admin
	}
}
