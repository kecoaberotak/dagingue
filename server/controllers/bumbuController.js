const getBumbu = (req, res) => {
  res.status(200).json({message: 'Get bumbu'})
}

const setBumbu = (req, res) => {
  res.status(200).json({message: 'Set bumbu'})
}

const updateBumbu = (req, res) => {
  res.status(200).json({message: `Update bumbu ${req.params.id}`})
}

const deleteBumbu = (req, res) => {
  res.status(200).json({message: `Delete bumbu ${req.params.id}`})
}

module.exports = {
  getBumbu,
  setBumbu,
  updateBumbu,
  deleteBumbu
}