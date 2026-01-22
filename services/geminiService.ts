
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Anda adalah Asisten Keuangan Digital profesional untuk Koperasi Karyawan bernama "KoperasiKaryawan Pro".
Tugas Anda adalah:
1. Membantu anggota memahami data simpanan dan pinjaman mereka.
2. Memberikan saran finansial yang bijak berdasarkan konteks koperasi.
3. Menjelaskan kebijakan koperasi (Simpanan Pokok, Wajib, Sukarela, SHU, Pinjaman).
4. Melakukan simulasi pinjaman sederhana jika diminta.
5. Menjawab dalam Bahasa Indonesia yang sopan, ramah, dan profesional.

Konteks Umum Koperasi:
- Simpanan Pokok: Dibayar sekali saat jadi anggota.
- Simpanan Wajib: Dibayar rutin tiap bulan.
- Simpanan Sukarela: Kapan saja dan bisa ditarik.
- Pinjaman/Pembiayaan: Maksimal plafon biasanya berdasarkan masa kerja atau limit kredit.
- SHU (Sisa Hasil Usaha): Dibagikan setiap tahun berdasarkan partisipasi anggota.
`;

export const getAIResponse = async (userPrompt: string, contextData: any) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const model = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Konteks Pengguna Saat Ini: ${JSON.stringify(contextData)}\n\nPertanyaan: ${userPrompt}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await model;
    return response.text || "Maaf, saya sedang mengalami kendala teknis.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Maaf, sistem AI sedang tidak tersedia saat ini.";
  }
};
