<script>
		function validate()
		{
			if (document.getElementById("name").value != "")&&
			   (document.getElementById("email").value != "")&&
			   (document.getElementById("comment").value != "")
				{
					alert("Please fill the form");
					return false;
				}
				else
					{
						alert("Thank you");
						return true;
					}
		}		   
</script>
