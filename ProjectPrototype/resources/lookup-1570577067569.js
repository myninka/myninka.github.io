(function(window, undefined) {
  var dictionary = {
    "8da80347-db8a-4762-ba7a-3bce01407dee": "New LA - Contract Signing",
    "1ad56ffa-b025-41be-974a-7369511bc25a": "New LA - Step 7 Guarantors",
    "dff16748-1cdf-46cb-a183-482c66625957": "New LA - Decision",
    "cc5dade7-ed55-4cc1-b3bb-c51ad168be7b": "New LA - Step 3 Expenses",
    "793ca64f-ff47-4923-bcc6-ad56fe4619ee": "Reports",
    "fc43509f-eca6-4208-84a0-a307a6e50523": "Login Bio",
    "b6733b65-93d3-49a8-8d6b-4eb1095ee1ae": "Loans - Renewal Report",
    "4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb": "New LA - Step 1",
    "51e3812f-937e-4bb0-a63b-8c81301de8b1": "New LA - Credit Check",
    "25b840f6-4cb3-4391-9e50-261fef7502b3": "Accounts",
    "c2deb8fa-9207-4dcd-aac4-a12fb70752ed": "New LA - Step 8 Collaterals",
    "0f1389dd-8fd3-45e8-a64a-c1c580a2cb24": "Potential Customer 1",
    "0bcbb520-0f2b-4827-a2c3-5f6248b7764e": "New LA - Step 6 Business",
    "22867e29-17de-4a06-8a1e-7f24606b0242": "Customer Details - Accounts",
    "546dc44e-97a7-48a3-8234-9264274fe0d3": "Login",
    "cc0e7da7-6f06-4bdd-9467-c08d90c267c5": "Set password",
    "555f9ada-e25c-4f43-a44c-4caa1dfd1980": "New LA - Step 2 Family",
    "1dd48b9c-91fc-4650-9742-d356093c27ee": "New Potential Customer",
    "c52b29a4-53d0-4035-9d02-45dab7b57beb": "New LA - Step 5 Assets",
    "abed2c85-4ce2-4de0-84b2-298ad5ae71f9": "Loan Applications",
    "4bb0a4ce-5232-49f4-bc02-c2b9b6e4c7f1": "Forgotten password",
    "d20144f7-473d-43e3-815f-0819f318e179": "Customer Details - LA",
    "bfac5d91-25d1-4665-b8fe-bf2ad5aec1a2": "Loan Calculator",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Dashboard",
    "56942cd0-2160-4841-b843-ac43598bed1b": "Customer Details - Loans",
    "20638bf2-b6b0-410e-bc83-9274b61ec066": "New LA - Documents",
    "a5bb2c61-0b64-465a-94c4-fe4c61093019": "Tasks All",
    "673cd4c6-a45b-4a02-b431-71ca1b1bcfbb": "New Customer",
    "7791c027-5231-469e-9c04-7b3d4eba85ae": "Task",
    "5f1c8e0b-4447-489c-acc0-e2683ca19ba8": "Loans",
    "6d76b208-c981-4975-85e2-579fb217b360": "Synchronization",
    "095113c8-291e-41a0-995c-fdbd04e2a6ba": "New LA - Step 10 Authentication",
    "3abdf0e8-490a-4cfb-9362-99f504c7638d": "New LA - Step 4 Debt",
    "2210cae7-25fd-4a4c-a319-ef79104ad71b": "New LA - Step 9 Questionnaire",
    "835f79ed-9094-4ba3-9221-0287e197be01": "Customer Details - Info",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "7c5faf12-674b-406e-ab17-e805baed95a2": "MessageDiscard",
    "1628bfaf-9ba2-41d8-95cf-aeb96c7b3fd8": "MessageLogOut",
    "147ad503-4df9-49f6-9057-f9e8c2d02998": "menu",
    "18944749-506c-45b1-96af-68cda8dd93c6": "MessageSync",
    "766778c6-3b35-4212-8fbe-6ec983cb11bb": "MessageNew",
    "cc0556ce-e539-4c4a-8483-b476717e16dc": "MessageSendForApproval",
    "5ea3b4c3-b4d5-4963-b244-9608a34c84aa": "MessageSubmit",
    "da08cfe0-3faa-47e4-8b4a-d51a77ce022b": "MessageRejection",
    "0669e2a5-48b1-4d90-9160-74b15d2232e2": "MessageBack",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);