import doctorModel from "../models/doctorModel.js"; // Đảm bảo đường dẫn đúng

const changeAvailablity = async (req, res) => {
    try {
        const { docId } = req.body; // Lấy docId từ request body

        // Tìm bác sĩ theo ID
        const docData = await doctorModel.findById(docId);
        if (!docData) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        // Thay đổi trạng thái availability
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });

        return res.json({ success: true, message: 'Availability Changed' });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
};

const doctorList = async(req, res) => {
    try {
        
        const doctors = await doctorModel.find({}).select(['-password','-email'])

        res.json({success:true, doctors})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { changeAvailablity, doctorList };
