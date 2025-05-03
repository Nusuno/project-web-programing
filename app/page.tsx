export default function Index() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center justify-center p-4 md:p-8">
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 text-center transform transition-all hover:shadow-2xl">

              {/* Hero Section */}
              <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4 animate-fade-in-down">
                  จัดการเงินง่ายๆ สไตล์นักศึกษา
              </h1>
              <p className="text-md md:text-lg text-gray-700 mb-8 animate-fade-in delay-200">
                  เริ่มต้นบันทึกรายรับ-รายจ่าย วางแผนงบประมาณ และเห็นภาพรวมการเงินของคุณง่ายๆ ด้วยแอปของเรา
              </p>

              {/* Call to Action Button */}
              {/* หมายเหตุ: ปุ่มนี้อาจจะยังไม่มีฟังก์ชันการทำงาน ต้องเพิ่ม Link หรือ onClick event ทีหลัง */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up delay-400">
                  เริ่มต้นใช้งานฟรี
              </button>

              {/* Features Highlight Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in delay-600">
                  <div className="feature-item p-4 rounded-lg transition-colors hover:bg-blue-50">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">📊 บันทึกง่าย</h3>
                      <p className="text-gray-600 text-sm">
                          บันทึกรายรับและรายจ่ายประจำวันของคุณได้อย่างรวดเร็ว ไม่พลาดทุกการใช้จ่าย
                      </p>
                  </div>
                  <div className="feature-item p-4 rounded-lg transition-colors hover:bg-blue-50">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 วางแผนงบ</h3>
                      <p className="text-gray-600 text-sm">
                          ตั้งเป้าหมายการใช้เงินในแต่ละหมวดหมู่ ช่วยให้คุณใช้จ่ายอย่างมีสติ
                      </p>
                  </div>
                  <div className="feature-item p-4 rounded-lg transition-colors hover:bg-blue-50">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">📈 ดูสรุปชัดเจน</h3>
                      <p className="text-gray-600 text-sm">
                          เห็นภาพรวมการเงินผ่านกราฟและรายงานที่เข้าใจง่าย ช่วยให้ตัดสินใจได้ดีขึ้น
                      </p>
                  </div>
              </div>
          </div>
          {/* Optional Footer */}
          <footer className="mt-8 text-gray-500 text-sm animate-fade-in delay-800">
              © {new Date().getFullYear()} Budget Buddy App. สงวนลิขสิทธิ์.
          </footer>
      </div>
  )
}