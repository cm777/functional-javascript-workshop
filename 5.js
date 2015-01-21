function checkUsersValid (goodUsers) {

	return function (submittedUsers){

		return submittedUsers.every(function (submitedUser) {

			return goodUsers.some(function (goodUser) {
				return (goodUser.id === submitedUser.id);
			});
		});
	};
}

module.exports = checkUsersValid;
